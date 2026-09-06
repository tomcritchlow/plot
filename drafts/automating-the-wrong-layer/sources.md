# Sources

## Evidence check — 2026-09-05

- No new external empirical result introduced. This pass corrects the interpretation of the Ford case: invoice elimination did not eliminate the matching of purchase orders and receipts.
- The two-axis matrix and audit ratings are author-developed heuristics, not validated measurements. Removed the summed score thresholds and automatic numeric funding gates, including from the runnable chatbot prompt.
- The original draft.md remains unchanged. Existing bibliographic notes are retained; this pass is not a fresh verification of every academic source.


## Origin

- Private internal discussion, 2026-08-25.
  - Used to recover the writer's original argument: large transformation projects risk automating the project-management layer while the underlying production work is being absorbed by agents.
  - The real project was converted into a generic composite media workflow. Identifying details, names and the private meeting link are intentionally omitted.

## Process redesign

- [Michael Hammer, “Reengineering Work: Don't Automate, Obliterate”](https://hbr.org/1990/07/reengineering-work-dont-automate-obliterate) (Harvard Business Review, 1990)
  - The opening hinge. Hammer argued that companies should use information technology to question inherited processes rather than merely accelerate them.
  - The new draft adds a moving-target problem: the reengineered process can itself decay before the investment pays back.

## Organizations as answers to information costs

- [Luis Garicano, “Hierarchies and the Organization of Knowledge in Production”](https://doi.org/10.1086/317671) (Journal of Political Economy, 2000)
  - Models hierarchy as a way to allocate problems between workers with common knowledge and specialists who handle exceptions.

- [Enrique Ide and Eduard Talamàs, “Artificial Intelligence in the Knowledge Economy”](https://doi.org/10.1086/737233) (Journal of Political Economy, 2025)
  - Extends the knowledge-hierarchy model to AI and shows that different levels and modes of AI autonomy imply different organizational shapes.

## Task bundles, complementarity and automation

- [Michael Kremer, “The O-Ring Theory of Economic Development”](https://academic.oup.com/qje/article-abstract/108/3/551/1881767) (Quarterly Journal of Economics, 1993)
  - Models production processes subject to mistakes in any of several complementary tasks, where output and wages can rise steeply with task quality.
  - The paper's opening examples include companies failing because of bad marketing even when product design, manufacturing and accounting are excellent.
  - Supplies the draft's central correction to additive automation arithmetic: a task's value depends on the quality of the tasks around it.

- [David H. Autor, Frank Levy and Richard J. Murnane, “The Skill Content of Recent Technological Change: An Empirical Exploration”](https://economics.mit.edu/sites/default/files/publications/the%20skill%20content%202003.pdf) (Quarterly Journal of Economics, 2003)
  - Distinguishes the tasks performed inside jobs from the skills of the people holding them.
  - Finds that computerization substituted for routine manual and cognitive tasks while complementing nonroutine problem-solving and communication tasks, with substantial task change inside nominally identical occupations.
  - Grounds the claim that technology recomposes jobs rather than simply removing whole roles.

- [Erik Brynjolfsson, Tom Mitchell and Daniel Rock, “What Can Machines Learn, and What Does It Mean for Occupations and the Economy?”](https://www.aeaweb.org/articles?id=10.1257/pandp.20181019) (AEA Papers and Proceedings, 2018)
  - Applies a machine-learning-suitability rubric to 18,156 O*NET tasks.
  - Finds that most occupations contain some suitable tasks, few are fully automatable and realizing the potential of machine learning usually requires redesign of job task content.
  - Provides a direct methodological precedent for evaluating transformation at the task level.

- [Fabrizio Dell'Acqua et al., “Navigating the Jagged Technological Frontier”](https://doi.org/10.1287/orsc.2025.21838) (Organization Science, 2026)
  - Field experiment with 758 consultants showing that AI assistance improved performance on tasks inside its capability frontier but reduced correctness on a task outside it.
  - The published paper argues that organizations should evaluate different human/AI configurations task by task within the knowledge workflow.
  - Grounds the audit's frontier-creep and frontier-jump stress tests.

- [Lisanne Bainbridge, “Ironies of Automation”](https://doi.org/10.1016/0005-1098(83)90046-8) (Automatica, 1983)
  - Shows how automating normal operation can leave people with monitoring and abnormal-condition takeover tasks that demand more skill while providing less practice and situational context.
  - Grounds the warning that “human in the loop” can become the most fragile O-ring rather than a complete control design.

- [Enrique Ide, “Automation, AI, and the Intergenerational Transmission of Knowledge”](https://arxiv.org/abs/2507.16078) (working paper, first circulated 2025; revised 2026)
  - Models the risk that automating entry-level tasks can interrupt the acquisition of tacit knowledge.

## Technological ferment and complementary redesign

- [Philip Anderson and Michael L. Tushman, “Technological Discontinuities and Dominant Designs”](https://www.jstor.org/stable/2393511) (Administrative Science Quarterly, 1990)
  - Supplies the distinction between an era of ferment, when competing designs proliferate, and an era of incremental change after a dominant design emerges.

- [Paul A. David, “The Dynamo and the Computer”](https://www.jstor.org/stable/2006600) (American Economic Review, 1990)
  - Uses electrification to show why general-purpose technologies can take decades to produce broad productivity gains: complementary systems and organizations must change too.

- [Erik Brynjolfsson, Daniel Rock and Chad Syverson, “The Productivity J-Curve”](https://www.nber.org/papers/w25148) (NBER working paper, 2018; later published in American Economic Journal: Macroeconomics)
  - Frames new processes, skills and organizational forms as intangible investments required to realize the value of a general-purpose technology.

## Change boundaries and adaptive architecture

- [D.L. Parnas, “On the Criteria To Be Used in Decomposing Systems into Modules”](https://doi.org/10.1145/361598.361623) (Communications of the ACM, 1972)
  - The draft's architectural hinge.
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

## Decisions under deep uncertainty

- [Elizabeth M. Bartels, Igor Mikolic-Torreira, Steven W. Popper and Joel B. Predd, “Do Differing Analyses Change the Decision?”](https://www.rand.org/pubs/research_reports/RR2735.html) (RAND Corporation, 2019)
  - Summarizes Robust Decision Making as a search for near-term actions that achieve satisfactory outcomes across a wide range of plausible futures rather than optimizing for a best-guess future.
  - Used to turn target durability into a three-future stress test rather than an attempt to forecast one AI capability curve.

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
  - Prior public argument that automating old processes can mean making yesterday's marketing faster and that cheaper production can move the bottleneck into coordination.
  - The new draft builds on that bottleneck claim by asking where the bottleneck migrates and whether the residual task becomes an O-ring.
- [Model-Entry Bookkeeping](../company-world-model/)
  - Adjacent draft about building systems around business events and state rather than document residue or transient workflows.
- [Empowered teams capture](../../captures/2026/08/2026-08-17-141422-empowered-teams.md)
  - Adjacent formulation about teams absorbing cross-functional handoffs and automated harnesses handling remaining approvals.
