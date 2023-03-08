type TableColumnProps = {
    children?: React.ReactNode;
    className?: string;
};
const TableColumn = ({ children, className }: TableColumnProps) => {
    return (
        <td
            className={`border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400 ${className}`}
        >
            {children}
        </td>
    );
};

export default TableColumn;
