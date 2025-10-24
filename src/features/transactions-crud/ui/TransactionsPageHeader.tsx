
import { IconButton } from '../../../shared/ui';
import { Icon } from '@iconify/react';

type Props = {};

const TransactionsPageHeader = (_props: Props) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
       Tranzaksiyalar
      </h1>
      <div className="flex gap-4 md:mt-0 mt-4 md:flex-row flex-col">
        <IconButton
          variant="ghost"
          className="bg-white text-gray-500 border-1 border-gray-200 px-4 py-2"
        >
          <Icon
            icon="bi:cloud-arrow-up-fill"
            width="24"
            height="24"
            className="mr-2"
          />
          Export
        </IconButton>
        <IconButton
          variant="ghost"
          className="bg-white text-gray-500 border-1 border-gray-200 px- py-2 "
        >
          <Icon
            icon="bi:cloud-arrow-down-fill"
            width="24"
            height="24"
            className="mr-2"
          />
          Import
        </IconButton>
      </div>
    </>
  );
};

export default TransactionsPageHeader;
