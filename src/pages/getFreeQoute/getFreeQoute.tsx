import { ReactElement, useState } from 'react';
import GetQuoteLayout from '../../layout/getQuoteLayout/getQuoteLayout';
import InvoiceLayout from '../../layout/invoiceLayout/invoiceLayout';
export interface IUserData {
  name?: string;
  phone?: string;
  email?: string;
  numberOfPage?: string;
  projectFile?: string;
  selectedFirstLng?: string;
  selectedSecondLng?: string;
  selectedRequest?: string;
}
const GetFreeQoute = (): ReactElement => {
  const [navToInvoice, setNavToInvoice] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUserData>({});

  return (
    <div className="get-free-qoute">
      {!navToInvoice ? (
        <GetQuoteLayout
          setUserData={setUserData}
          userData={userData}
          setNavToInvoice={setNavToInvoice}
        ></GetQuoteLayout>
      ) : (
        <InvoiceLayout userData={userData} />
      )}
    </div>
  );
};

export default GetFreeQoute;
