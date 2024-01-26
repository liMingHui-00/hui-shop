export default createFetch({
  baseUrl: import.meta.env.VITE_BASE_API,
  options: {
    refetch: true,
  },
})