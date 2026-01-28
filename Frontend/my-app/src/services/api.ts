const API_BASE = import.meta.env.VITE_API_BASE || '/api'

type ApiError = {
  success: false
  message: string
}

type ApiSuccess<T> = {
  success: true
  message: string
  data: T
}

type ApiResponse<T> = ApiSuccess<T> | ApiError

// Generic request wrapper
async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_BASE}${endpoint}`
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  }

  try {
    const res = await fetch(url, config)
    const contentType = res.headers.get('content-type') || ''
    const raw = await res.text()
    const json = contentType.includes('application/json') && raw.length
      ? (JSON.parse(raw) as unknown)
      : null

    if (!res.ok) {
      // Backend should return { success: false, message: ... }
      if (json && typeof json === 'object' && 'message' in (json as any)) {
        return json as ApiError
      }
      return {
        success: false,
        message: raw || `Request failed (${res.status})`,
      }
    }

    if (json == null) {
      return {
        success: false,
        message: 'Invalid server response. Expected JSON.',
      }
    }

    return json as ApiSuccess<T>
  } catch (err: any) {
    // Network or parsing error
    return {
      success: false,
      message: err?.message || 'Network error. Please try again.',
    }
  }
}

// -------------------
// Demo / BookDemo API
// -------------------
export interface DemoPayload {
  name: string
  phoneNumber: string
}

export interface DemoRecord {
  _id: string
  name: string
  phoneNumber: string
  createdAt: string
  updatedAt: string
}

export interface ContactPayload {
  fullName: string
  email: string
  phoneNumber?: string
  message: string
}

export interface ContactRecord {
  _id: string
  fullName: string
  email: string
  phoneNumber?: string
  message: string
  createdAt: string
  updatedAt: string
}

export const demoApi = {
  async submitDemo(payload: DemoPayload): Promise<ApiResponse<DemoRecord>> {
    return request<DemoRecord>('/demo/add-demo', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  },

  // You can add more demo endpoints here, e.g.:
  // async list(): Promise<ApiResponse<DemoRecord[]>> { ... }
  // async getById(id: string): Promise<ApiResponse<DemoRecord>> { ... }
}

export const contactApi = {
  async submitContact(payload: ContactPayload): Promise<ApiResponse<ContactRecord>> {
    return request<ContactRecord>('/contact/add', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  },
}

