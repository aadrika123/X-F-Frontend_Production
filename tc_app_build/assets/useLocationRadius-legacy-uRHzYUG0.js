System.register(["./router-legacy-_t8Mc_yw.js","./index-legacy-pzfMkCFk.js"],(function(t,e){"use strict";var n;return{setters:[null,function(t){n=t.e}],execute:function(){t("u",(function(){var t=n(!1),e=t.coords,o=(t.timestamp,{East_Zone:{latitude:20.7122002,longitude:77.0102968},West_Zone:{latitude:20.708891,longitude:76.9867701},North_Zone:{latitude:20.7214404,longitude:77.003902},South_Zone:{latitude:20.6937346,longitude:77.0063663}});function i(t,e,n,o){var i=(n-t)*Math.PI/180,u=(o-e)*Math.PI/180,a=Math.sin(i/2)*Math.sin(i/2)+Math.cos(t*Math.PI/180)*Math.cos(n*Math.PI/180)*Math.sin(u/2)*Math.sin(u/2);return 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))*6378137}var u=i(o.East_Zone.latitude,o.East_Zone.longitude,null==e?void 0:e.latitude,null==e?void 0:e.longitude),a=i(o.West_Zone.latitude,o.West_Zone.longitude,null==e?void 0:e.latitude,null==e?void 0:e.longitude),l=i(o.North_Zone.latitude,o.North_Zone.longitude,null==e?void 0:e.latitude,null==e?void 0:e.longitude),d=i(o.South_Zone.latitude,o.South_Zone.longitude,null==e?void 0:e.latitude,null==e?void 0:e.longitude);return{radiusInMeters:50,distanceToTargetEast:u,distanceToTargetWest:a,distanceToTargetNorth:l,distanceToTargetSouth:d}}))}}}));
