import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Icon, Menu, MenuIcon } from "lucide-react"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" alt="Logo" width={120} height={18} />
        <Button size="icon" variant={"outline"}>
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
