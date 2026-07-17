import { toast } from 'react-toastify';

export function ToastAlerta(mensagem: string, tipo: string) {
  const options = {
    position: 'top-right' as const,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
  };

  switch (tipo) {
    case 'sucesso':
      toast.success(mensagem, options);
      break;

    case 'erro':
      toast.error(mensagem, options);
      break;

    default:
      toast.info(mensagem, options);
      break;
  }
}