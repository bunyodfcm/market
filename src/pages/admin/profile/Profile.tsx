import React, { useEffect, useState } from "react";
import Card from "../../../components/ui/Cards/Card";
import Button from "../../../components/ui/Buttons/Button";
import Input from "../../../components/ui/Inputs/Input";
// import Avatar from "../../../components/ui/Avatar";
import Avatar, { AvatarImage, AvatarFallback } from "../../../components/ui/Avatar";

import { Loader2, Edit } from "lucide-react";
import axios from "axios";
import { getUserById } from "../../../services/authApi";

type UserProfile = {
  id: number;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  avatar?: string;
};

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [editing, setEditing] = useState<boolean>(false);
  const [form, setForm] = useState<Partial<UserProfile>>({});

  useEffect(() => {
    const fetchProfile = async () => {
       
      try {
          const user = JSON.parse(localStorage.getItem("user") || "{}");
          console.log(user);
          console.log(user.id);
          
          
      if (!user?.id) {
        console.error("User ID topilmadi!");
        return;
      }

     
        const { data } = await getUserById(user.id)
        setProfile(data);
        setForm(data);
      } catch (err) {
        console.error("Profilni olishda xato:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleSave = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put<UserProfile>(
        `https://e-mall.webpack.uz/api/users/${profile?.id}`,
        form
      );
      setProfile(data);
      setEditing(false);
    } catch (err) {
      console.error("Profilni yangilashda xato:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !profile) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin w-6 h-6 text-gray-500" />
      </div>
    );
  }

  if (!profile) {
    return <p className="text-center text-gray-500">Profil topilmadi</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-6">
      <Card className="rounded-2xl shadow-md">
        <div className="flex flex-col items-center gap-4 p-6">
          {/* Avatar */}
          <Avatar className="w-20 h-20">
            {profile.avatar ? (
              <AvatarImage src={profile.avatar} alt={profile.fullName} />
            ) : (
              <AvatarFallback>
                {profile.fullName?.charAt(0).toUpperCase()}
              </AvatarFallback>
            )}
          </Avatar>

          {/* Profil ma'lumotlari */}
          {!editing ? (
            <div className="text-center space-y-1">
              <h2 className="text-xl font-semibold">{profile.fullName}</h2>
              <p className="text-gray-500">{profile.email}</p>
              {profile.phone && (
                <p className="text-gray-500">📞 {profile.phone}</p>
              )}
              {profile.company && (
                <p className="text-gray-500">🏢 {profile.company}</p>
              )}
            </div>
          ) : (
            <div className="w-full space-y-3">
              <Input
                placeholder="Full name"
                value={form.fullName || ""}
                onChange={(e: any) =>
                  setForm({ ...form, fullName: e.target.value })
                }
              />
              <Input
                placeholder="Email"
                value={form.email || ""}
                onChange={(e: any) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
              <Input
                placeholder="Phone"
                value={form.phone || ""}
                onChange={(e: any) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
              <Input
                placeholder="Company"
                value={form.company || ""}
                onChange={(e: any) =>
                  setForm({ ...form, company: e.target.value })
                }
              />
            </div>
          )}

          {/* Tugmalar */}
          <div className="flex gap-2 pt-4">
            {!editing ? (
              <Button onClick={() => setEditing(true)} variant="outline">
                <Edit className="w-4 h-4 mr-1" /> Edit
              </Button>
            ) : (
              <>
                <Button onClick={handleSave} disabled={loading}>
                  {loading ? (
                    <Loader2 className="animate-spin w-4 h-4 mr-1" />
                  ) : (
                    "Save"
                  )}
                </Button>
                <Button
                  onClick={() => {
                    setForm(profile);
                    setEditing(false);
                  }}
                  variant="outline"
                >
                  Cancel
                </Button>
              </>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
