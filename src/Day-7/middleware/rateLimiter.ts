import { Request, Response, NextFunction } from "express";
import { rateLimiterInterface } from "../../Interfaces/UserInterface";

export default class rateLimiter {
  private requestCount = new Map<string, number>();

  public limit = (maxRequest: number): rateLimiterInterface => {
    return (req: Request, res: Response, next: NextFunction) => {
      const ip = req.ip || "unknown";
      const count = this.requestCount.get(ip) || 0;

      if (count >= maxRequest) {
        return res.status(429).json({ message: "Maximum limit reached" });
      }

      this.requestCount.set(ip, count + 1);
      next();
    };
  };
}
