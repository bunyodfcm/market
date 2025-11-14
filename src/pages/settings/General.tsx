import React, { useState, useEffect, useRef } from 'react';
import { useAuthStore } from '../../app/store/auth.store';
import { useUserCrud } from '../../features/user-crud/model/useUserCrud';
import { Input, Label, Textarea } from '../../shared/ui/input';
import { Button } from '../../shared/ui/button';
import { useTranslation } from '../../shared/i18n/hooks';
import type { EditUserRequest } from '../../features/user-crud/api';

const General: React.FC = () => {
  const { user } = useAuthStore();
  const { editUser, isLoading } = useUserCrud();
  const { t } = useTranslation();

  const [formData, setFormData] = useState<EditUserRequest>({
    id: 0,
    firstName: '',
    lastName: '',
    middleName: '',
    secondPhone: '',
    bio: '',
    adress: null,
    emails: [],
    phones: [],
   
  });

  const [emailInput, setEmailInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');
  const lastUserIdRef = useRef<number | null>(null);

  // User ma'lumotlarini formaga yuklash
  useEffect(() => {
    if (user && user.id && lastUserIdRef.current !== user.id) {
      lastUserIdRef.current = user.id;
      setFormData({
        id: user.id,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        middleName: user.middleName || '',
        secondPhone: user.secondPhone || '',
        bio: user.bio || '',
        adress: user.adress
          ? typeof user.adress === 'string'
            ? {}
            : user.adress
          : null,
        emails: user.emails || [],
        phones: user.phones || [],
        
      });
    }
  }, [user?.id]); // Faqat user.id o'zgarganda yangilash

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

 

  const handleAddEmail = () => {
    if (emailInput.trim()) {
      setFormData(prev => ({
        ...prev,
        emails: [...(prev.emails || []), emailInput.trim()],
      }));
      setEmailInput('');
    }
  };

  const handleRemoveEmail = (index: number) => {
    setFormData(prev => ({
      ...prev,
      emails: prev.emails?.filter((_, i) => i !== index) || [],
    }));
  };

  const handleAddPhone = () => {
    if (phoneInput.trim()) {
      setFormData(prev => ({
        ...prev,
        phones: [...(prev.phones || []), phoneInput.trim()],
      }));
      setPhoneInput('');
    }
  };

  const handleRemovePhone = (index: number) => {
    setFormData(prev => ({
      ...prev,
      phones: prev.phones?.filter((_, i) => i !== index) || [],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await editUser(formData);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (!user) {
    return (
      <div className="p-8 text-center text-gray-500">
        Foydalanuvchi ma'lumotlari topilmadi
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Umumiy ma'lumotlar
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Asosiy telefon (faqat ko'rsatish) */}
        <div>
          <Label htmlFor="phone">Asosiy telefon</Label>
          <Input
            id="phone"
            type="tel"
            value={user.phone || ''}
            disabled
            variant="filled"
            className="bg-gray-100 cursor-not-allowed"
          />
          <p className="mt-1 text-sm text-gray-500">
            Asosiy telefon raqamini o'zgartirib bo'lmaydi
          </p>
        </div>

        {/* Ism */}
        <div>
          <Label htmlFor="firstName">Ism</Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName || ''}
            onChange={handleChange}
            placeholder="Ismingizni kiriting"
            variant="outline"
          />
        </div>

        {/* Familiya */}
        <div>
          <Label htmlFor="lastName">Familiya</Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName || ''}
            onChange={handleChange}
            placeholder="Familiyangizni kiriting"
            variant="outline"
          />
        </div>

        {/* Otasining ismi */}
        <div>
          <Label htmlFor="middleName">Otasining ismi</Label>
          <Input
            id="middleName"
            name="middleName"
            type="text"
            value={formData.middleName || ''}
            onChange={handleChange}
            placeholder="Otasining ismini kiriting"
            variant="outline"
          />
        </div>

        {/* Qo'shimcha telefon */}
        <div>
          <Label htmlFor="secondPhone">Qo'shimcha telefon</Label>
          <Input
            id="secondPhone"
            name="secondPhone"
            type="tel"
            value={formData.secondPhone || ''}
            onChange={handleChange}
            placeholder="+998901234567"
            variant="outline"
          />
        </div>

        {/* Bio */}
        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            name="bio"
            value={formData.bio || ''}
            onChange={handleChange}
            placeholder="O'zingiz haqingizda qisqacha ma'lumot"
            rows={4}
            variant="outline"
          />
        </div>

        {/* Email'lar */}
        <div>
          <Label htmlFor="emails">Email'lar</Label>
          <div className="flex gap-2 mb-2">
            <Input
              id="emails"
              type="email"
              value={emailInput}
              onChange={e => setEmailInput(e.target.value)}
              placeholder="email@example.com"
              variant="outline"
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddEmail();
                }
              }}
            />
            <Button
              type="button"
              variant="outline"
              onClick={handleAddEmail}
              disabled={!emailInput.trim()}
            >
              Qo'shish
            </Button>
          </div>
          {formData.emails && formData.emails.length > 0 && (
            <div className="space-y-2">
              {formData.emails.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md"
                >
                  <span className="text-sm text-gray-700">{email}</span>
                  <button
                    type="button"
                    onClick={() => handleRemoveEmail(index)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    O'chirish
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Qo'shimcha telefonlar */}
        <div>
          <Label htmlFor="phones">Qo'shimcha telefonlar</Label>
          <div className="flex gap-2 mb-2">
            <Input
              id="phones"
              type="tel"
              value={phoneInput}
              onChange={e => setPhoneInput(e.target.value)}
              placeholder="+998901234567"
              variant="outline"
              onKeyPress={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleAddPhone();
                }
              }}
            />
            <Button
              type="button"
              variant="outline"
              onClick={handleAddPhone}
              disabled={!phoneInput.trim()}
            >
              Qo'shish
            </Button>
          </div>
          {formData.phones && formData.phones.length > 0 && (
            <div className="space-y-2">
              {formData.phones.map((phone, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md"
                >
                  <span className="text-sm text-gray-700">{phone}</span>
                  <button
                    type="button"
                    onClick={() => handleRemovePhone(index)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    O'chirish
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

       

        {/* Submit button */}
        <div className="flex justify-end gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              // Reset form
              if (user) {
                setFormData({
                  id: user.id,
                  firstName: user.firstName || '',
                  lastName: user.lastName || '',
                  middleName: user.middleName || '',
                  secondPhone: user.secondPhone || '',
                  bio: user.bio || '',
                  adress: user.adress
                    ? typeof user.adress === 'string'
                      ? {}
                      : user.adress
                    : null,
                  emails: user.emails || [],
                  phones: user.phones || [],
                  salary: user.salary || null,
                });
                setEmailInput('');
                setPhoneInput('');
              }
            }}
          >
            {t.common.cancel}
          </Button>
          <Button type="submit" variant="primary" disabled={isLoading}>
            {isLoading ? t.common.loading : t.common.save}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default General;
