# TABLE COMPONENTS

**Table** komponentlari - ma'lumotlarni jadval ko'rinishida ko'rsatish uchun.

## Komponentlar:

### **Table** - Asosiy jadval

- Column configuration
- Custom cell rendering
- Row click handling
- Loading va empty states
- Responsive design
- 3 ta variant: `default`, `striped`, `bordered`

### **TableCell** - Custom cell

- Text alignment
- ColSpan va RowSpan
- Custom styling

### **TableActions** - Action tugmalari

- Edit, Delete, View actions
- Icon va text tugmalar
- Horizontal layout

## Ishlatish:

### Asosiy Table:

```tsx
import { Table } from 'shared/ui/table';

const columns = [
  {
    key: 'id',
    title: 'ID',
    dataIndex: 'id',
    width: 80,
  },
  {
    key: 'name',
    title: 'Name',
    dataIndex: 'name',
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
  },
  {
    key: 'actions',
    title: 'Actions',
    align: 'right',
    render: (_, record) => (
      <TableActions
        actions={[
          {
            key: 'edit',
            label: 'Edit',
            onClick: () => editUser(record.id),
          },
          {
            key: 'delete',
            label: 'Delete',
            danger: true,
            onClick: () => deleteUser(record.id),
          },
        ]}
      />
    ),
  },
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

<Table
  columns={columns}
  data={data}
  hoverable
  onRowClick={record => viewUser(record.id)}
/>;
```

### Transaction Table (rasmda ko'rsatilgandek):

```tsx
const transactionColumns = [
  {
    key: 'id',
    title: 'Transaction ID',
    dataIndex: 'id',
    render: value => `#${value}`,
  },
  {
    key: 'amount',
    title: 'Paid',
    dataIndex: 'amount',
    align: 'right',
    render: value => `$${value.toFixed(2)}`,
  },
  {
    key: 'method',
    title: 'Method',
    dataIndex: 'method',
    render: (value, record) => (
      <div className="flex items-center space-x-2">
        {record.methodIcon && (
          <img src={record.methodIcon} alt={value} className="w-6 h-6" />
        )}
        <span>{value}</span>
      </div>
    ),
  },
  {
    key: 'createdAt',
    title: 'Created',
    dataIndex: 'createdAt',
    render: value => new Date(value).toLocaleString(),
  },
  {
    key: 'actions',
    title: 'Actions',
    align: 'right',
    render: (_, record) => (
      <Button variant="ghost" size="sm">
        View
      </Button>
    ),
  },
];

const transactions = [
  {
    id: 134,
    amount: 294.0,
    method: 'Master card',
    methodIcon: '/icons/mastercard.png',
    createdAt: '2020-12-16T14:21:00Z',
  },
  {
    id: 858,
    amount: 169.0,
    method: 'Paypal',
    methodIcon: '/icons/paypal.png',
    createdAt: '2020-12-16T22:41:00Z',
  },
];

<Table
  columns={transactionColumns}
  data={transactions}
  variant="striped"
  size="md"
/>;
```

### Custom Cell Rendering:

```tsx
const columns = [
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    render: status => (
      <StatusBadge status={status === 'active' ? 'active' : 'inactive'} />
    ),
  },
  {
    key: 'avatar',
    title: 'User',
    render: (_, record) => (
      <div className="flex items-center space-x-3">
        <img
          src={record.avatar}
          alt={record.name}
          className="w-8 h-8 rounded-full"
        />
        <div>
          <div className="font-medium">{record.name}</div>
          <div className="text-sm text-gray-500">{record.email}</div>
        </div>
      </div>
    ),
  },
];
```

### Loading va Empty States:

```tsx
// Loading
<Table
  columns={columns}
  data={[]}
  loading={true}
/>

// Empty state
<Table
  columns={columns}
  data={[]}
  loading={false}
/>
```

### Table Variants:

```tsx
// Striped rows
<Table variant="striped" />

// Bordered table
<Table variant="bordered" />

// Small size
<Table size="sm" />

// Sticky header
<Table sticky />
```

### Real-world misollar:

#### User Management Table:

```tsx
const UserTable = ({ users, onEdit, onDelete }) => {
  const columns = [
    {
      key: 'avatar',
      title: 'User',
      render: (_, user) => (
        <div className="flex items-center space-x-3">
          <UserAvatar user={user} size="sm" />
          <div>
            <div className="font-medium">{user.name}</div>
            <div className="text-sm text-gray-500">{user.email}</div>
          </div>
        </div>
      ),
    },
    {
      key: 'role',
      title: 'Role',
      dataIndex: 'role',
      render: role => <Badge variant="secondary">{role}</Badge>,
    },
    {
      key: 'status',
      title: 'Status',
      dataIndex: 'status',
      render: status => <StatusBadge status={status} />,
    },
    {
      key: 'actions',
      title: 'Actions',
      align: 'right',
      render: (_, user) => (
        <TableActions
          actions={[
            {
              key: 'edit',
              icon: <EditIcon className="w-4 h-4" />,
              onClick: () => onEdit(user),
            },
            {
              key: 'delete',
              icon: <DeleteIcon className="w-4 h-4" />,
              danger: true,
              onClick: () => onDelete(user),
            },
          ]}
        />
      ),
    },
  ];

  return <Table columns={columns} data={users} hoverable variant="striped" />;
};
```

## Xususiyatlari:

- **Responsive** - mobile va desktop uchun
- **Custom rendering** - har bir cell uchun
- **Row interactions** - click, hover
- **Loading states** - skeleton yoki loading text
- **Empty states** - "No data" message
- **Flexible columns** - width, alignment, sorting
- **Action buttons** - edit, delete, view
- **TypeScript** - full type support
