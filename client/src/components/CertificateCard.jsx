import { FaLock } from "react-icons/fa";
import { PiCertificateBold } from "react-icons/pi";

const CertificateCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm space-y-2">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
          <PiCertificateBold className="text-gray-500 text-3xl" />
        </div>

        <div>
          <h2 className="text-md font-medium text-gray-800">Certificate</h2>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <FaLock className="text-gray-400" />
            Complete the course to download the certificate
          </p>
        </div>
      </div>

      <button
        disabled
        className="bg-[#5E8E82] text-white px-4 py-2 rounded cursor-not-allowed opacity-70"
      >
        Get Certificate
      </button>
    </div>
  )
}

export default CertificateCard