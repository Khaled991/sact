import { ReactElement, useRef, useState } from 'react';
import GetQuoteLayout from '../../layout/getQuoteLayout/getQuoteLayout';
import InvoiceLayout from '../../layout/invoiceLayout/invoiceLayout';

const GetFreeQuote = (): ReactElement => {
  const [navToInvoice, setNavToInvoice] = useState<boolean>(false);
  const userData = useRef<FormData>(new FormData());

  const setFormData = (key: string, value: string | Blob) => {
    userData.current.set(key, value);
  };

  return (
    <div className="get-free-quote">
      {!navToInvoice ? (
        <GetQuoteLayout
          setFormData={setFormData}
          formData={userData.current}
          setNavToInvoice={setNavToInvoice}
        />
      ) : (
        <InvoiceLayout setFormData={setFormData} formData={userData.current} />
      )}
    </div>
  );
};

export default GetFreeQuote;
