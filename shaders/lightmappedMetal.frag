uniform sampler2D textureSample_0;
uniform sampler2D textureSample_1;
uniform float currentTime;

varying vec3 normal, lightDir;

void main() {    

	vec3 n;
	float intensity;
	
	n = normalize(normal);
	intensity = max(dot(lightDir,n),0.0); 

	vec4 color = texture2D(textureSample_0,gl_TexCoord[0].st);
	vec4 lighting = texture2D(textureSample_1,gl_TexCoord[0].st) * vec4(abs(sin(currentTime))*1.0,0.0,0.0,1.0);

//	gl_FragColor = vec4( color+lighting);
	gl_FragColor = gl_Color * color + lighting;


}
