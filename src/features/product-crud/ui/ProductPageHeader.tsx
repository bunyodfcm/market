import { IconButton } from '../../../shared/ui';
import { Icon } from '@iconify/react';

type Props = {}

const ProductPageHeader = (props: Props) => {
  return (
    <>
    <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Mahsulotlar
          </h1>
          <div className='flex gap-4'>
            <IconButton
              variant="ghost"
              className="bg-white text-gray-500 border-1 border-gray-200 px-4 py-2"
            >
              <Icon icon="bi:cloud-arrow-up-fill" width="24" height="24" className='mr-2'/>
              Export
            </IconButton>
            <IconButton
              variant="ghost"
              className="bg-white text-gray-500 border-1 border-gray-200 px- py-2 "
            >
              <Icon icon="bi:cloud-arrow-down-fill" width="24" height="24" className='mr-2'/>
              Import
            </IconButton>
            <IconButton
              variant="primary"
              className='px-3 py-2'
            >
              <Icon icon="bi:plus" width="24" height="24" className='mr-2'/>
             Mahsulot qo'shish
            </IconButton>
          </div>
    </>
  )
}

export default ProductPageHeader