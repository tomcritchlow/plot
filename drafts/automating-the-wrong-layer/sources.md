# Sources

## Origin

- Private internal discussion, 2026-08-25.
  - Used to recover the writer's original argument: large transformation projects risk automating the project-management layer while the underlying production work is being absorbed by agents.
  - The real project was converted into a generic composite media workflow. Identifying details, names and the private meeting link are intentionally omitted.

## Process redesign

- [Michael Hammer, “Reengineering Work: Don't Automate, Obliterate”](https://hbr.org/1990/07/reengineering-work-dont-automate-obliterate) (Harvard Business Review, 1990)
  - The opening hinge. Hammer argued that companies should use information technology to question inherited processes rather than merely accelerate them.
  - The new draft adds a moving-target problem: the reengineered process can itself decay before the investment pays back.

## Change boundaries and adaptive architecture

- [D.L. Parnas, “On the Criteria To Be Used in Decomposing Systems into Modules”](https://doi.org/10.1145/361598.361623) (Communications of the ACM, 1972)
  - The draft's central academic source.
  - Parnas argues against decomposing a system from its flowchart and recommends beginning with difficult design decisions and decisions likely to change, then hiding each behind a module boundary.
  - The short “almost always incorrect” quotation and the summary of the paper's prescription were checked against an accessible [transcription of the original article](https://www.cs.lafayette.edu/~gexia/cs301/resources/parnas.html).

- [Herbert A. Simon, “The Architecture of Complexity”](https://www2.econ.iastate.edu/tesfatsi/ArchitectureOfComplexity.HSimon1962.pdf) (Proceedings of the American Philosophical Society, 1962)
  - Supplies the idea of stable intermediate forms: complex systems evolve more readily when useful subassemblies can survive interruption and recombination.
  - Used to frame canonical objects, constraints, evaluations and interfaces as useful units that may survive a workflow's redesign.

- [David J. Teece, Gary Pisano and Amy Shuen, “Dynamic Capabilities and Strategic Management”](https://doi.org/10.1002/(SICI)1097-0266(199708)18:7%3C509::AID-SMJ882%3E3.0.CO;2-Z) (Strategic Management Journal, 1997)
  - Defines advantage in rapidly changing environments partly through a firm's ability to integrate, build and reconfigure internal and external capabilities.
  - Supports the draft's final inversion: transformation should lower the cost of the next redesign, not only deliver a fixed target state.

## AI project selection

- [Foster Provost and Panos Ipeirotis, “AI Strategy: How to Choose What AI Product to Implement”](https://arxiv.org/abs/2607.23733) (2026)
  - The paper supplied by Tom.
  - Its expected-ROI framework separates Value if Successful, Likelihood of Success and Investment Required. It also makes option value and understanding value explicit, recommends staged commitments and portfolios, and says rankings should be revisited as priorities move.
  - The riff's proposed extension is target survival: whether the use case will remain valuable and recognizable through implementation and payback.
  - Option and understanding value become especially important when the direct target has a short half-life because they describe what survives the project's failure or expiry.

## Requirements volatility (background)

- [Didar Zowghi and Nur Nurmuliani, “A Study of the Impact of Requirements Volatility on Software Project Performance”](https://opus.lib.uts.edu.au/handle/10453/2350) (Asia-Pacific Software Engineering Conference, 2002)
  - Empirical background showing that requirements volatility is associated with schedule and cost overruns.
  - Useful but not cited in the prose: the draft's claim is more specific than ordinary change risk. The target itself can lose strategic value even if the project accommodates its changing requirements.

## Systems of record, intent and harnesses

- [Matt Slotnick, “Intention Is All You Need”](https://mslotnick.substack.com/p/intention-is-all-you-need)
  - Argues that systems of record create shared understanding by owning core business objects and their state, while agentic organizations also need shared intentions.
  - The riff adds that the record itself can be brittle if its schema preserves today's task decomposition.

- [Garry Tan, “systems of record will need to become AI harnesses”](https://x.com/garrytan/status/2091742825042030681)
  - Short prediction that systems of record must become the harnesses through which agents work or risk being displaced.
  - The riff's caveat: a harness still targets the wrong layer if it hardens expiring choreography.

## Capability change (background)

- [METR, “Measuring AI Ability to Complete Long Tasks”](https://metr.org/blog/2025-03-19-measuring-ai-ability-to-complete-long-tasks/)
  - Evidence that relevant model capabilities can move materially within an enterprise implementation cycle.
  - Removed from the main prose in this version so the argument does not depend on transferring one benchmark's curve into every operational domain.

## Related work in this repository

- [Of Termites & Tokens](../../published/2026-06-08-of-termites-tokens.md)
  - Prior public argument against treating AI only as cheap labor and local workflow efficiency.
- [An Almanac for the Age of Chaos](../../published/2026-07-30-an-almanac-for-the-age-of-chaos.md)
  - Prior public argument that automating old processes can mean making yesterday's marketing faster.
- [Model-Entry Bookkeeping](../company-world-model/)
  - Adjacent draft about building systems around business events and state rather than document residue or transient workflows.
