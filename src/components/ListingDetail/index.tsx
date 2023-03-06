import { useState } from 'react';
import Modal from '../../common/components/Modal';

type ListingDetailProps = {
    open: boolean;
    onClose: () => void;
};
const ListingDetail = ({ open, onClose }: ListingDetailProps) => {
    return <Modal size='sm' title='Listing Detail' open={open} onClose={onClose} />;
};

export default ListingDetail;
