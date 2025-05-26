import { Input as AntdInput, InputProps as AntdInputProps } from 'antd';
import { cn } from '@/utils/cn';

export default function Input({ className, ...props }: AntdInputProps) {
    return <AntdInput className={cn('', className)} {...props} />;
}

export function SearchInput({ className, ...props }: AntdInputProps) {
    return <AntdInput.Search className={cn('', className)} size="large" enterButton {...props} />;
}
