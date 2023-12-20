"use client"
import { usePathname  ,useParams} from 'next/navigation'
function contactid() {
    const Params = useParams();
    const Pathname = usePathname();
    console.log(Params.contactid);
    console.log(Pathname);
  return (
    <div>This Profile Name { Params.contactid}</div>
  )
}

export default contactid