import React from "react";
import ReactDOM from "react-dom";
import { MdCloseCircleOutlineIcon } from "../../icons";
import Button from "../button";

function CheckOrderModal(props) {
  return ReactDOM.createPortal(
    <div className="fixed flex flex-col gap-4 w-1/3 p-10 h-2/3 top-44 left-1/3 items-center border-2 bg-slate-100 overflow-auto no-scrollbar">
      <MdCloseCircleOutlineIcon
        size="1.2rem"
        className="absolute top-2 left-2 text-slate-600 hover:text-rose-400"
        onClick={props.onClose}
      />
      <div className="flex gap-4 w-[100%]">
        <p className="vazir-extraBold text-slate-600">نام مشتری: </p>
        <p className="vazir-light text-slate-800"> {props.orders.username} </p>
      </div>
      <div className="flex gap-4 w-[100%]">
        <p className="vazir-extraBold text-slate-600">نام خانوادگی مشتری: </p>
        <p className="vazir-light text-slate-800"> {props.orders.lastname} </p>
      </div>
      <div className="flex gap-4 w-[100%]">
        <p className="vazir-extraBold text-slate-600">آدرس: </p>
        <p className="vazir-light text-slate-800"> {props.orders.address} </p>
      </div>
      <div className="flex gap-4 w-[100%]">
        <p className="vazir-extraBold text-slate-600">تلفن: </p>
        <p className="vazir-light text-slate-800"> {props.orders.phone} </p>
      </div>
      <div className="flex gap-4 w-[100%]">
        <p className="vazir-extraBold text-slate-600">زمان تحویل: </p>
        <p className="vazir-light text-slate-800"> {props.orders.expectAt} </p>
      </div>
      <div className="flex gap-4 w-[100%]">
        <p className="vazir-extraBold text-slate-600">زمان سفارش: </p>
        <p className="vazir-light text-slate-800"> {props.orders.createdAt} </p>
      </div>
      <table>
        <thead>
          <tr>
            <td>کالا</td>
            <td>قیمت</td>
            <td>تعداد</td>
          </tr>
        </thead>
        <tbody>
          {props.orders.products.map(item => {
            return <tr>
              <td> {item.name} </td>
              <td> {item.price} </td>
              <td> {item.count} </td>
            </tr>
          })}
        </tbody>
      </table>
      <Button title="تحویل شد" className="p-3 mt-14 rounded-lg mainHeaderColor text-slate-600 vazir-extraBold" />
    </div>,
    document.getElementById("modal-root")
  );
}

export default CheckOrderModal;
