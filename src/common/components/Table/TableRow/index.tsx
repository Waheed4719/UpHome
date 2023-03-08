type TableRowProps = {
    children: React.ReactNode;
    className?: string;
};

const TableRow = ({ children, className }: TableRowProps) => {
    return <tr className={`${className}`}>{children}</tr>;
};

export default TableRow;
