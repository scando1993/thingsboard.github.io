---
layout: docwithnav
title: Entity Groups
description: Entity Groups Guide 

---

{% assign feature = "Entity Groups" %}{% include templates/pe-feature-banner.md %}

* TOC
{:toc}

Pacificsoft allows you to configure multiple custom Entity Groups. 
Each entity (device/asset/entity view/customer/user/dashboard) may belong to multiple groups simultaneously. 
Special group "All" always contains all entities that belong to specific tenant account.

For each entity group, Pacificsoft user may configure different columns to visualize specific telemetry or attributes values. 
Pacificsoft user may also define custom actions to be present for each entity: open dashboard or send RPC call, etc. 
Bulk operations to delete entities, add them to the group or remove are also supported.  
   
See video tutorial below for step-by-step instruction how to use this feature.

<br/>
<div id="video">  
    <div id="video_wrapper">
        <iframe src="https://www.youtube.com/embed/RNdaEqrGhn8" frameborder="0" allowfullscreen></iframe>
    </div>
</div> 

## Next steps

{% assign currentGuide = "AdvancedFeatures" %}{% include templates/guides-banner.md %}
