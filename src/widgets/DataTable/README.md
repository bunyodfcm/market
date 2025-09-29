# DATATABLE WIDGET Directory

**Umumiy jadval** komponenti. Ma'lumotlarni jadval ko'rinishida ko'rsatish va boshqarish.

## Vazifasi:

- 📊 Ma'lumotlarni jadval ko'rinishida ko'rsatish
- 🔍 Filtering va searching
- 📈 Sorting (tartiblash)
- 📄 Pagination
- ✏️ CRUD actions (Edit, Delete)

## Kelajakda qo'shilishi kerak:

- Table component
- Column configuration
- Sorting functionality
- Filtering options
- Pagination controls
- Action buttons

## Misol:

```tsx
// index.tsx
export const DataTable = ({
  data,
  columns,
  onEdit,
  onDelete,
  pagination = true,
}) => {
  return (
    <div className="data-table">
      <TableHeader columns={columns} />
      <TableBody
        data={data}
        columns={columns}
        onEdit={onEdit}
        onDelete={onDelete}
      />
      {pagination && <Pagination />}
    </div>
  );
};
```
