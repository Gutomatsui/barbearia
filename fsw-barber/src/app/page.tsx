import Header from "./_components/header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold text-white">Olá, Guto</h2>
        <p>Segunda Feira 05 de Agosto</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça a sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-[150] w-full">
          <Image
            className="rounded-xl object-cover"
            fill
            src="/banner-01.png"
            alt="banner"
          />
        </div>
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/* esquerca*/}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit bg-purple-800" variant="outline">
                Confirmado
              </Badge>
              <h3 className="font-bold">Corte de Cabelo</h3>
              <div className="item-center flex">
                <Avatar>
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="px-1 text-sm">Barbearia FSW</p>
              </div>
            </div>
            {/* direita */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default Home
