import './globals.css'
import {Card, CardDescription, CardHeader, CardTitle, CardFooter, CardContent} from "@/components/ui/card";
import DialogLogin from "@/components/login/login";

export default function Home() {


  return (
    <div className="flex min-h-screen bg-slate-900 items-center justify-center">
      <Card className="w-[440px] h-[400px] grid grid-rows-[min-content_1fr_min-content] p-4">
        <CardHeader className="flex items-center justify-center">
            <CardTitle>Lucky In!!</CardTitle>
            <CardDescription>Sim, você está no lugar certo!</CardDescription>
        </CardHeader>
          <CardContent className="flex flex-col items-center justify-center space-y-2">
              <p>Faça o login</p>
              <div className="flex items-center justify-center p-3 gap-2">
                  <DialogLogin/>
              </div>
          </CardContent>
          <CardFooter className="flex items-center justify-center space-x-2">
              <CardDescription>Lucky In © - Todos os direitos reservados.</CardDescription>
          </CardFooter>
      </Card>
    </div>
  );
}
