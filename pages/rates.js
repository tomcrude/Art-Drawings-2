import Image from "next/image"
import Back from "../components/button-back"

export default function order() { 
    let images = [1,2,3]
    return(
     <div className="container-fluid text-center">
        <p className="mt-4">Please note that this commission page is for reference only! If you have any inquiries in regard to a custom illustration, please contact me directly.</p>
        <div className="process p-1">
          <h3 className="mt-4">Faces $15</h3>
          <h3 className="mt-4">Halfbody $20</h3>
          <h3 className="mt-4 mb-4">Fullbody $25</h3>
        </div>
        <p>Detailed background have an extra pricing</p>
        <p>Extra Character - +80%</p>
        <p className="text-danger">PRICE MAY VARY DEPENDING ON COMPLEXITY</p>
        <div className="row mt-4 mb-4">
        <Back />
        </div>
     </div>
    )
   }