import Link from "next/link";
import Image from "next/image";

const LoanOfferings = () => {
  return (
    <div className="bg-ambak-bg py-4">
      {/* <div className="bg-ambak-bg py-16"> */}
      <div className="ambak-container">
        {/* <h2 className="text-2xl md:text-3xl font-bold text-success text-center mb-12">
          Our Offerings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Home Loans */}
          {/* <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="bg-ambak-light p-3 rounded-lg mr-4">
                <Image
                  src="https://ext.same-assets.com/3568832262/199416212.svg"
                  alt="Home loan icon"
                  width={32}
                  height={32}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-xl font-bold text-primary">Home Loans</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Finance your dream home with a loan that can be repaid in monthly
              installments over a period of 5-30 years.
            </p>
            <Link
              href="/home-loans"
              className="text-primary font-medium hover:text-secondary transition-colors"
            >
              Learn More →
            </Link>
          </div>

          {/* Loan Against Property */}
          {/* <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-start mb-4">
              <div className="bg-ambak-light p-3 rounded-lg mr-4">
                <Image
                  src="https://ext.same-assets.com/3568832262/131795941.svg"
                  alt="Loan Against Property icon"
                  width={32}
                  height={32}
                  className="w-6 h-6"
                />
              </div>
              <h3 className="text-xl font-bold text-primary">
                Loan Against Property
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Secure a low-interest loan using your property as collateral, with
              flexible fund usage and easy monthly repayments.
            </p>
            <Link
              href="/loan-against-property"
              className="text-primary font-medium hover:text-secondary transition-colors"
            >
              Learn More →
            </Link> */} 
          {/* </div> */}
        </div>
      </div>
    // </div>
  );
};

export default LoanOfferings;
