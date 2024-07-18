import { Bounce, toast } from 'react-toastify'

type ToastTypeOptions = 'info' | 'success' | 'warning' | 'error'

export const renderToast = (type: ToastTypeOptions, message: string) => {
  return toast[type](message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  })
}
