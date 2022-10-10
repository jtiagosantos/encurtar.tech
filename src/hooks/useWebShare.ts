import { useToast } from '@chakra-ui/react';

export const useWebShare = () => {
  const toast = useToast();

  const share = async (data: ShareData) => {
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch (error) {
        toast({
          status: 'error',
          description: 'Erro ao compartilhar o link. Tente novamente',
        });
      }
    } else {
      toast({
        status: 'info',
        description:
          'Atualmente, o compartilhamento da web não é compatível com este navegador',
      });
    }
  };

  return { share };
};
