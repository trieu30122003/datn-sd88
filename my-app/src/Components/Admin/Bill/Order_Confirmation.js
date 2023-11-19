import React, { useEffect, useRef, useState } from "react";
import Bill_Service from "../../../Api/Bill_Service";
import { useParams } from "react-router-dom";

function Order_Confirmation() {
  const {id} = useParams();
  const [status, setStatus] = useState(0);
  const update = (e) => {
    e.preventDefault();
    let color = {
      // colorCode,
      status
    };
    Bill_Service.update(id,color).then((res) => {
      if (res.status === 200) {
        alert("thành công!");
        window.location = `/bill`;
      }
    });
  }
  return (
    <div>
      <button onClick={update}>xác nhận</button>
    </div>
  );
}
export default Order_Confirmation;