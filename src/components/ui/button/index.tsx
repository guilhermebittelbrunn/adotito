import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd';
import { cn } from '@/utils/cn';

export default function Button({ className, ...props }: AntdButtonProps) {
    return <AntdButton className={cn('py-2', className)} {...props} />;
}
