import { useState } from 'react';
import { userApi, type EditUserRequest } from '../api';
import { useAuthStore } from '../../../app/store/auth.store';
import { useToast } from '../../../shared/ui/toast';
import { useTranslation } from '../../../shared/i18n/hooks';

export const useUserCrud = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { updateUser } = useAuthStore();
  const { showToast } = useToast();
  const { t } = useTranslation();

  const editUser = async (data: EditUserRequest) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await userApi.editUser(data);

      // Update user in auth store
      if (response.user) {
        updateUser(response.user);
      }

      showToast({
        variant: 'success',
        title: t.common.success,
        message: response.message || 'Profil muvaffaqiyatli yangilandi',
        duration: 3000,
      });

      return response;
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        'Profilni yangilashda xatolik yuz berdi';
      setError(errorMessage);

      showToast({
        variant: 'error',
        title: t.common.error,
        message: errorMessage,
        duration: 5000,
      });

      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    editUser,
    isLoading,
    error,
    clearError: () => setError(null),
  };
};
