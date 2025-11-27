import "./loading.scss";
import Image from "next/image";


export default function Loading() {

    return (
    <div className="loading-container">
      <Image src="/assets/image/CineSmile.svg" alt="" width={300} height={200} />
      <div className="signature">Created by Kaio GG</div>
    </div>
  );
}
