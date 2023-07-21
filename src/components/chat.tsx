"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export interface ChatProps {}

export function Chat(props: ChatProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <Card className="w-[900px] h-[700px] grid grid-rows-[min-content_1fr_min-content] gap-2">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>
          Using Vercel SDK to create a chat bot.
        </CardDescription>
      </CardHeader>
      <ScrollArea>
        <CardContent className="space-y-3">
          {messages.map((message) => (
            <React.Fragment key={message.id}>
              <div className="flex gap-2">
                {message.role === "user" && (
                  <div className="flex gap-4 p-4 w-full">
                    <Avatar>
                      <AvatarFallback>PV</AvatarFallback>
                      <AvatarImage src="https://github.com/pedrohsv1.png" />
                    </Avatar>
                    <div>
                      <p className="leading-relaxed">
                        <span className="block font-bold text-slate-800">
                          Humano:
                        </span>
                        {message.content}
                      </p>
                    </div>
                  </div>
                )}
                {message.role === "assistant" && (
                  <div className="flex gap-4 bg-slate-100 p-4 w-full rounded">
                    <Avatar>
                      <AvatarFallback>CSA</AvatarFallback>
                      <AvatarImage src="https://avatars.githubusercontent.com/u/71043321?s=48&v=4" />
                    </Avatar>
                    <div className="prose">
                      <p className="leading-relaxed ">
                        <span className="block font-bold text-slate-800">
                          AI:
                        </span>
                        {message.content}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </CardContent>
      </ScrollArea>

      <CardFooter>
        <form action="" onSubmit={handleSubmit} className="flex w-full gap-2 ">
          <Input
            placeholder="How can i help you?"
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  );
}
