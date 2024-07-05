import { createContextId, Signal } from "@builder.io/qwik";

export const HeadingLevelContext = createContextId<Signal<number>>('heading-level')
