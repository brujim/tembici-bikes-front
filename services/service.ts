import api from "./api";
import apiLegacy from "./apiLegacy";
import schema from "./schema";
import { LoginRequest, OrderRequest, OrderResponse, SessionRequest, SessionResponse } from "./types";

export async function getSession({ token, id, campaign }: SessionRequest): Promise<SessionResponse> {
  const data = {
    token,
    subscription_id: id,
    campaign
  }
  const method = schema.POST.session.method
  const url = schema.POST.session.uri
  const headers = {
    'Content-Type': 'application/json',
  }
  const options = {
    method,
    url,
    headers,
    data
  }

  const response = await api.request(options)
  return response.data.body
}

export async function getOrder({ subscriptionId, sessionToken }: OrderRequest): Promise<OrderResponse> {
  const data = {
    subscription_id: subscriptionId
  }
  const method = schema.POST.order.method
  const url = schema.POST.order.uri
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionToken}`
  }
  const options = {
    method,
    url,
    headers,
    data
  }

  const response = await api.request(options)
  return response.data
}

export async function getLogin({ email, password, recaptcha }: LoginRequest) {
  const data = {
    email: email,
    password: password,
    g_recaptcha_response: recaptcha
  }
  const method = schema.POST.login.method
  const url = schema.POST.login.uri
  const headers = {
    'Content-Type': 'application/json',
  }

  const options = {
    method,
    url,
    headers,
    data
  }

  const response = await api.request(options)
  return response.data
}

export async function getSignatures(sessionToken: string) {
  const method = schema.GET.subscriptions.method
  const url = schema.GET.subscriptions.uri
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionToken}`
  }

  const options = {
    method,
    url,
    headers
  }

  const response = await api.request(options)
  return response.data.body
}

export async function recoveryPassword(email: string) {
  const data = {
    email
  }
  const method = schema.POST.recoveryPassword.method
  const url = schema.POST.recoveryPassword.uri
  const headers = {
    'Content-Type': 'application/json',
  }

  const options = {
    method,
    url,
    headers,
    data
  }

  const response = await apiLegacy.request(options)
  return response.data.body
}
