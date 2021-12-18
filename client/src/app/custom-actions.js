import { createAction } from '@reduxjs/toolkit'

export const start = createAction('api/start')
export const success = createAction('api/success')
export const error = createAction('api/error')
