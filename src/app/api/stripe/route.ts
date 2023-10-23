import { Game } from "@/models/game";

export async function POST(req: Request, res: Response) {
  const cartItems = (await req.json()) as Game[];
  console.log(cartItems);
}
