"use client"
import { usePathname  ,useParams} from 'next/navigation'
function blogdatails() {
    const Params = useParams();
    const Pathname = usePathname();
    console.log(Params.blogdatails);
    console.log(Pathname);
  return (
    <div>This Profile Name { Params.blogdatails}</div>
  )
}

export default blogdatails