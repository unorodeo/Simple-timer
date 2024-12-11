"use client";

import React, { useEffect, useState } from "react";

import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import { RotateCcwIcon } from "lucide-react";
import { Timer } from "./timer";

export const Wrapper: React.FC = () => {
  // days
  const [days, setDays] = useState<number>(0);
  // hours
  const [hours, setHours] = useState<number>(0);
  // minutes
  const [minutes, setMinutes] = useState<number>(0);
  // seconds
  const [seconds, setSeconds] = useState<number>(0);
  // milliseconds
  const [milliseconds, setMilliseconds] = useState<number>(0);

  // triggers
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        if (milliseconds > 0) {
          setMilliseconds((milliseconds) => milliseconds - 1);
        } else if (seconds > 0) {
          setSeconds((second) => second - 1);
          setMilliseconds(99);
        } else if (minutes > 0) {
          setMinutes((minute) => minute - 1);
          setSeconds(59);
          setMilliseconds(99);
        } else if (hours > 0) {
          setHours((hour) => hour - 1);
          setMinutes(59);
          setSeconds(59);
          setMilliseconds(99);
        } else if (days > 0) {
          setDays((day) => day - 1);
          setHours(24);
          setMinutes(59);
          setSeconds(59);
          setMilliseconds(99);
        } else {
          setIsRunning(false);
          alert("Timer has ended");
        }
      }, 10); // accounting for millisecinds
    }

    return () => clearInterval(interval);
  }, [milliseconds, seconds, minutes, hours, days, isRunning]);

  // triggers
  function start() {
    if (
      days !== 0 ||
      hours !== 0 ||
      minutes !== 0 ||
      seconds !== 0 ||
      milliseconds !== 0
    ) {
      setIsRunning(true);
    } else {
      alert("Time cannot start at zeros. Add a countdown");
    }
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setIsRunning(false);
    setDays(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setMilliseconds(0);
  }

  // handlers
  function handleDays(evt: React.ChangeEvent<HTMLInputElement> | undefined) {
    if (!evt) return;
    setDays(Number(evt.target.value));
  }
  function handleHours(evt: React.ChangeEvent<HTMLInputElement> | undefined) {
    if (!evt) return;
    setHours(Number(evt.target.value));
  }
  function handleMinutes(evt: React.ChangeEvent<HTMLInputElement> | undefined) {
    if (!evt) return;
    setMinutes(Number(evt.target.value));
  }
  function handleSeconds(evt: React.ChangeEvent<HTMLInputElement> | undefined) {
    if (!evt) return;
    setSeconds(Number(evt.target.value));
  }

  return (
    <>
      <Timer
        time={{
          days: days,
          hours: hours,
          minutes: minutes,
          seconds: seconds,
          milliseconds: milliseconds,
        }}
        mutate={{
          days: handleDays,
          hours: handleHours,
          minutes: handleMinutes,
          seconds: handleSeconds,
        }}
        run={isRunning}
      />
      <div className="flex flex-col items-center justify-center gap-4 mt-12 md:flex-row">
        <Button
          type="button"
          size={"lg"}
          className="text-base"
          onClick={() => start()}
        >
          <Icons.PlayerPlayIcon />
          Start
        </Button>
        <Button
          type="button"
          variant={"secondary"}
          size={"lg"}
          className="text-base"
          onClick={() => stop()}
        >
          <Icons.PlayerStopIcon />
          Stop
        </Button>
        <Button
          type="button"
          variant={"outline"}
          size={"lg"}
          className="text-base"
          onClick={() => reset()}
        >
          <RotateCcwIcon />
          Reset
        </Button>
      </div>
    </>
  );
};
