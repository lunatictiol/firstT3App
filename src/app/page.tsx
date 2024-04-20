import Link from "next/link";

const mockUrls=[
  "https://utfs.io/f/cb04f8cb-06c2-4559-8713-0b3ef3d30776-eqyvam.jpg",
  "https://utfs.io/f/5b4e0be8-8705-4647-8cef-5ae7ffcf776f-1518c7.jpg",
  "https://utfs.io/f/d605e335-892e-4a19-9a72-2e780350cd13-1ff77d.png",
  "https://utfs.io/f/acca1279-643c-476e-87f4-165468e2fe36-c7b85s.jpg"
];
const mockImages = mockUrls.map((url,index)=>({
  id:index+1,
 url  
}))
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
     {
      [...mockImages,...mockImages,...mockImages,...mockImages,...mockImages].map((image)=>(
        <div key={image.id} className="w-48" >
          <img src={image.url} alt="image" />
        </div>
      ))
     }
      </div>
    
    </main>
  );
}
