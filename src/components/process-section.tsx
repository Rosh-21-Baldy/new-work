import Link from "next/link";
import Image from "next/image";

const ProcessSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="ambak-container">
        <div className="text-center mb-14">
          <h2 className="text-success text-2xl md:text-3xl font-bold mb-4">
          At Prefinn, we succeed together.
          </h2>
          <h3 className="text-Primary text-xl font-semibold">#Prefinn Loans</h3>
          <h3 className="text-success text-xl font-medium mt-1">
            {/* Happiness Delivered, Always */}
            Fast, Secure, and Paperless – Your Loan is Just a Click Away
          </h3>
          <div className="mt-6">
            <Link
              href="/offer"
              className="inline-block bg-secondary text-white py-2 px-6 rounded-md font-medium hover:bg-secondary/90 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="text-center text-2xl font-bold text-primary mb-10">
          {/* Apply Online, Get Approved Instantly – Ghar Baithe, Loan Taiyar! */}
          Your Happiness, Our Promise!
          </h2>

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
                <h3 className="text-primary font-semibold text-lg mb-3">
                  Complete application in Seconds
                </h3>
                <p className="text-muted-foreground text-sm">
                  Need help? Discuss your Requirement with Prefinn Team.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-md h-full p-6">
                <div className="text-4xl font-bold text-primary bg-white rounded-full w-10 h-10 flex items-center justify-center mb-4 -mt-12 border border-muted shadow-sm">
                  
                </div>
                <div className="mb-4">
                  <Image
                    src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?t=st=1743016254~exp=1743019854~hmac=9fd30bb29c75e8e1c6b033cd350054252e1a6838ed7af3ac3d789263c550e65c&w=1380"
                    alt="Track your application live"
                    width={240}
                    height={180}
                    className="w-full h-auto"
                  />
                </div>
                <h3 className="text-primary font-semibold text-lg mb-2">
                  Stay With Us
                </h3>
                <p className="text-muted-foreground text-sm">
                  Choose your own bank & Applied for it
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
                <h3 className="text-primary font-semibold text-lg mb-2">
                  Disbursement Day
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our tech ensures smooth processing, making disbursement quick
                  and easy.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <Link
            href="/offer"
            className="bg-secondary text-white py-2 px-6 rounded-md font-medium hover:bg-secondary/90 transition-colors"
          >
            Apply Now
          </Link>
          <Link
            href="/become-partner"
            className="border border-primary text-primary py-2 px-6 rounded-md font-medium hover:bg-primary/5 transition-colors"
          >
            Become A Partner
          </Link>
        </div> */}

        {/* <div className="mt-14">
          <div className="text-center mb-6">
            <p className="text-muted-foreground">
              Simplifying your journey with Prefinn's seamless tech solutions
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <Image
              src="https://ext.same-assets.com/488712481/849522504.png"
              alt="CIBIL"
              width={80}
              height={40}
              className="h-8 w-auto"
            />
            <Image
              src="https://ext.same-assets.com/488712481/849522504.png"
              alt="DIGI LOCKER"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProcessSection;
