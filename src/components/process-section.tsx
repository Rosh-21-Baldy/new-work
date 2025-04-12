import Link from "next/link";
import Image from "next/image";

const ProcessSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="ambak-container">
       
      <div className="text-center mb-5">
  <h2 className="fw-bold" style={{ color: "#28a745" }}>
   We Simplify your Loan
  </h2>
  {/* <p className="text-muted">We provide customized financial services to meet all your needs</p> */}
</div>
        <div className="mb-14">
     
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-md h-full p-6">
                <div className="text-4xl font-bold text-primary bg-white rounded-full w-10 h-10 flex items-center justify-center mb-4 -mt-12 border border-muted shadow-sm">
                  
                </div>
                <div className="mb-4">
                  
                  <Image
                    src="https://img.freepik.com/free-vector/people-taking-out-money-from-bank-concept-illustration_114360-13931.jpg?t=st=1743016192~exp=1743019792~hmac=c74e9f032b4dbd792487a0bcd5b406fee935333a92c48126b20588e6bee38154&w=826"
                    alt="Complete the application in minutes"
                    width={240}
                    height={180}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className=" font-semibold text-lg mb-3"style={{color:"#0d53b7	"}}>
                  Complete application in Seconds
                </h3>
                <p className="text-muted-foreground text-sm  d-flex justify-content-center">
                  Need help? Discuss your Requirement with Finance Partner 
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-md h-full p-6">
                <div className="text-4xl font-bold text-primary bg-white rounded-full w-10 h-10 flex items-center justify-center mb-4 -mt-12 border border-muted shadow-sm">
                  
                </div>
                <div className="mb-4">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/256/4593/4593624.png"
                    alt="Complete the application in minutes"
                    // alt="Track your application live"
                    width={240}
                    height={180}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2 d-flex justify-content-center"style={{color:"#0d53b7	"}}>
                 
                  Stay With Us
                  
                </h3>
                <p className="text-muted-foreground text-sm  d-flex justify-content-center">
                
                 Choose your own finance Partner
                 
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-md h-full p-6">
                <div className="text-4xl font-bold text-primary bg-white rounded-full w-10 h-10 flex items-center justify-center mb-4 -mt-12 border border-muted shadow-sm">
                  
                </div>
                <div className="mb-4">
                  <Image
                    src="https://img.freepik.com/free-vector/e-wallet-concept-illustration_114360-7561.jpg?t=st=1743016315~exp=1743019915~hmac=1e78a3f5b39bb2e99d3a83cd239d6a573b433db0fed964ea29456a01b65fce17&w=826"
                    alt="Disbursement Day"
                    width={240}
                    height={180}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className=" font-semibold text-lg mb-2 d-flex justify-content-center"style={{color:"#0d53b7	"}}>
                sanction's
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our fintech platform ensures full compliance with global regulatory frameworks
                  
                </p>
              </div>
            </div>
          </div>
        
        </div>

       
      </div>
    </div>
  );
};

export default ProcessSection;
