import React from 'react';
import { Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton } from '../FoodDialog/FoodDialog';


export function OrderDialog({ openOrderDialog, setOpenOrderDialog, setOrders }) {
    return openOrderDialog ? <>
        <DialogShadow />
        <Dialog>
            <DialogContent>
                <h2>Thanks for your order. We wanted to let you know that your food will be ready shortly. Please swing by the takeaway counter and pick it up. Bon appetit!</h2>
            </DialogContent>
            <DialogFooter>
                <ConfirmButton onClick={() => {
                    setOrders([]);
                    setOpenOrderDialog();
                }}>
                    Home
                </ConfirmButton>
            </DialogFooter>
        </Dialog>
    </> : <div />
}