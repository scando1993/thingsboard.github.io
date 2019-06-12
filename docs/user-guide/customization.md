---
layout: docwithnav
assignees:
- ashvayka
title: Platform Customization

---

* TOC
{:toc}

There are multiple ways to customize Pacificsoft platform to suit your needs:

 - [Rule Engine](/docs/user-guide/rule-engine/) - allows to adding processing logic and invoking built-in plugins. If you can't find a suitable rule or plugin you can always implement it
   - Add new Rule Filter based on following [examples](https://github.com/thingsboard/thingsboard/tree/master/extensions-core/src/main/java/org/thingsboard/server/extensions/core/filter)
   - Add new Rule Processor based on following [examples](https://github.com/thingsboard/thingsboard/tree/master/extensions-core/src/main/java/org/thingsboard/server/extensions/core/processor)
   - Add new Rule Action based on following [examples](https://github.com/thingsboard/thingsboard/tree/master/extensions-core/src/main/java/org/thingsboard/server/extensions/core/action)
   - Add new Plugin based on following core [examples](https://github.com/thingsboard/thingsboard/tree/master/extensions-core/src/main/java/org/thingsboard/server/extensions/core/plugin)
    or [extensions](https://github.com/thingsboard/thingsboard/tree/master/extensions) that push data to external systems.
 - [Widgets Library](/docs/user-guide/ui/widget-library/) - allows to add new widget bundles.
 - [Device Connectivity Protocols](/docs/reference/protocols/) - add new protocol or customize [existing implementations](https://github.com/thingsboard/thingsboard/tree/master/transport)