# PROJECT ENTITY Directory

**Loyiha** ob'ekti uchun mo'ljallangan papka. Project ma'lumotlari va ular bilan bog'liq funksiyalar.

## Vazifasi:

- 📋 Project ma'lumot modeli
- 🔗 Project API functions
- 🎨 Project UI komponentlari
- ✅ Project validation
- 🏗️ Project data transformation

## Kelajakda qo'shilishi mumkin:

### **api/**

- Project-specific API calls
- Project CRUD operations
- Project endpoints

### **model/**

- Project types va interfaces
- Project validation schemas
- Project utility functions

### **ui/**

- Project Card komponenti
- Project List komponenti
- Project-related UI elements

## Misol:

```tsx
// model/types.ts
export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'completed';
  createdBy: string;
  createdAt: Date;
}

// ui/ProjectCard.tsx
export const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <span className={`status-${project.status}`}>{project.status}</span>
    </div>
  );
};
```
