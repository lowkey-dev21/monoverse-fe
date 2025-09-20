"use client";
import React, { useState } from "react";

type Choice = {
  id: string;
  label: string;
  feedback: string;
  points: number;
};

type Scene = {
  id: string;
  title: string;
  description: string;
  media?: string; // image URL
  choices: Choice[];
};

const SCENES: Scene[] = [
  {
    id: "s1",
    title: "The Briefing",
    description:
      "You arrive for a product kickoff. Stakeholders expect a minimal viable scope that demonstrates impact. What's your first step?",
    media:
      "https://images.unsplash.com/photo-1508873699372-7ae94b8f4b25?w=1200&q=80&auto=format&fit=crop",
    choices: [
      {
        id: "s1-c1",
        label: "Ask clarifying questions to align goals",
        feedback:
          "Good — clarifying scope reduces wasted work and surfaces success metrics.",
        points: 2,
      },
      {
        id: "s1-c2",
        label: "Jump straight to prototyping",
        feedback:
          "Risky — prototyping without alignment may build the wrong thing.",
        points: 0,
      },
      {
        id: "s1-c3",
        label: "Defer to stakeholders and follow their plan",
        feedback:
          "Partially okay, but you miss a chance to shape outcomes and discover constraints.",
        points: 1,
      },
    ],
  },
  {
    id: "s2",
    title: "Design Decision",
    description:
      "You must choose between a full-featured UI and a focused MVP. What do you prioritize?",
    media:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop",
    choices: [
      {
        id: "s2-c1",
        label: "Focus on core user journey and measurable outcomes",
        feedback:
          "Correct — focusing scope helps deliver value fast and validate assumptions.",
        points: 2,
      },
      {
        id: "s2-c2",
        label: "Ship all polished features at once",
        feedback:
          "Ambitious, but increases delivery time and risk. Consider iterative releases.",
        points: 0,
      },
      {
        id: "s2-c3",
        label: "Build a technical proof-of-concept first",
        feedback:
          "May be useful but can delay user feedback; ensure it's tied to user outcomes.",
        points: 1,
      },
    ],
  },
  {
    id: "s3",
    title: "Feedback & Coaching",
    description:
      "Your team delivers an early prototype and asks how to collect meaningful feedback. What do you recommend?",
    media:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop",
    choices: [
      {
        id: "s3-c1",
        label: "Run short, targeted usability tests with success criteria",
        feedback:
          "Excellent — targeted tests reveal real usability blockers and inform prioritization.",
        points: 2,
      },
      {
        id: "s3-c2",
        label: "Ask stakeholders for subjective opinions",
        feedback:
          "Fast but biased — stakeholders' opinions may not reflect users' behavior.",
        points: 0,
      },
      {
        id: "s3-c3",
        label: "Defer until analytics are in place",
        feedback:
          "Analytics help, but waiting delays learning. Combine lightweight tests and analytics.",
        points: 1,
      },
    ],
  },
];

export default function Simulator() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const scene = SCENES[index];

  function choose(choiceId: string) {
    // record selection for this scene
    setSelected(s => ({ ...s, [scene.id]: choiceId }));
    const choice = scene.choices.find(c => c.id === choiceId);
    if (choice) {
      setScore(s => s + choice.points);
    }
    setShowFeedback(true);
  }

  function next() {
    setShowFeedback(false);
    if (index < SCENES.length - 1) {
      setIndex(i => i + 1);
    }
  }

  function restart() {
    setIndex(0);
    setSelected({});
    setScore(0);
    setShowFeedback(false);
  }

  // compute result label
  const resultLabel =
    score >= 5
      ? "Proficient — strong decisions"
      : score >= 3
      ? "Competent"
      : "Needs practice";

  return (
    <div className="bg-card rounded p-6">
      <h4 className="font-semibold mb-2">Interactive simulator</h4>

      {index < SCENES.length ? (
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <h5 className="font-semibold">{scene.title}</h5>
              <p className="text-sm text-gray-600 mb-3">{scene.description}</p>
              {scene.media && (
                <div className="relative w-full h-44 rounded mb-3 overflow-hidden">
                  <img
                    src={scene.media}
                    alt={scene.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="mt-2"></div>
                </div>
              )}

              <div className="space-y-2">
                {scene.choices.map(ch => (
                  <button
                    key={ch.id}
                    className={`w-full text-left p-3 rounded border transition-colors ${
                      selected[scene.id] === ch.id
                        ? "border-primary bg-primary/5"
                        : "border-transparent bg-transparent"
                    }`}
                    onClick={() => choose(ch.id)}
                    disabled={!!selected[scene.id]}
                  >
                    <div className="flex items-center justify-between">
                      <span>{ch.label}</span>
                      <span className="text-sm text-gray-500">
                        {ch.points} pts
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <aside className="p-4 bg-muted/20 rounded md:h-full">
              <h6 className="font-semibold mb-2">Progress</h6>
              <div className="text-sm text-gray-600 mb-3">
                Scene {index + 1} of {SCENES.length}
              </div>
              <div className="text-sm text-gray-600 mb-3">Score: {score}</div>
              <div className="flex flex-col gap-2">
                {SCENES.map((s, idx) => (
                  <div
                    key={s.id}
                    className={`text-sm ${
                      idx === index ? "font-semibold" : "text-gray-600"
                    }`}
                  >
                    {idx + 1}. {s.title}
                  </div>
                ))}
              </div>
            </aside>
          </div>

          {showFeedback && (
            <div className="p-4 bg-background rounded border">
              <strong>Feedback:</strong>
              <p className="text-sm text-gray-700 mt-2">
                {scene.choices.find(c => c.id === selected[scene.id])?.feedback}
              </p>
              <div className="mt-3 flex gap-2">
                {index < SCENES.length - 1 ? (
                  <button
                    className="bg-primary text-white px-4 py-2 rounded"
                    onClick={next}
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    className="bg-primary text-white px-4 py-2 rounded"
                    onClick={restart}
                  >
                    View summary
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : null}

      {index >= SCENES.length && (
        <div className="p-4">
          <h5 className="font-semibold">Summary</h5>
          <p className="text-sm text-gray-700">Your score: {score}</p>
          <p className="text-sm text-gray-700">Result: {resultLabel}</p>
          <div className="mt-3 flex gap-2">
            <button onClick={restart} className="rounded px-4 py-2 border">
              Restart
            </button>
            <a
              href="/signup"
              className="bg-primary text-white px-4 py-2 rounded"
            >
              Try Monoverse
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
