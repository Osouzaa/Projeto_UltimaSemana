import axios from 'axios'

export const httpClient = axios.create({
  baseURL: 'https://wexer-example-backend.vercel.app/api',
  headers: {
    'x-api-key': '1e7977ea-d97e-11ed-afa1-0242ac120002',
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGViZDc5ODRjMzNlZWU2MmUwMTg3YyIsIm5hbWUiOiJHYWJyaWVsICIsImVtYWlsIjoiZ2FicmllbHNvdXphQGdtYWlsLmNvbSIsImlhdCI6MTY4Mjk1MjMwNiwiZXhwIjoxNjgzMDM4NzA2fQ.X5ireZPr8GPv5pd-r-4VG_3XQ0wLv1bkVgLT86WHriQ'
  }
})
