import { Select as AntdSelect, SelectProps as AntdSelectProps } from 'antd';
import { cn } from '@/utils/cn';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

interface SelectProps extends AntdSelectProps {
    name: string;
    changeUrl?: boolean;
}

export default function Select({ options, className, changeUrl = false, onChange, ...props }: SelectProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleFilterChange = (key: string, value: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        params.set('page', '1');
        router.push(`?${params.toString()}`);
    };

    return (
        <AntdSelect
            options={options}
            className={cn('', className)}
            size="large"
            {...props}
            onChange={(value) => {
                if (changeUrl) {
                    handleFilterChange(props.name, value);
                }
                onChange?.(value);
            }}
        />
    );
}
