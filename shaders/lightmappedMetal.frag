uniform sampler2D textureSample_0;
uniform sampler2D textureSample_1;
uniform float currentTime;

void main() {    


	vec4 color = texture2D(textureSample_0,gl_TexCoord[0].st);
	vec4 lighting = texture2D(textureSample_1,gl_TexCoord[0].st) * vec4(sin(currentTime)*1.0,0.0,0.0,1.0);

	gl_FragColor = vec4( color+lighting);

//   	gl_FragColor = texture2D(textureSample_0,gl_TexCoord[0].st) +  vec4(1.0 * sin(currentTime),0.0,0.0,1.0) * texture2D(textureSample_1,gl_TexCoord[0].st) );

}
