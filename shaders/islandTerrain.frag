uniform sampler2D textureSample_0;
uniform sampler2D textureSample_1;

varying vec4 texCoord;

void main() {


	vec4 texel0, texel1, result;

	texel0 = texture2D(textureSample_0,gl_TexCoord[0].st);
	texel1 = texture2D(textureSample_1,gl_TexCoord[0].st);

	result = mix(texel0,texel1,texel1.a);

	gl_FragColor = result ;
    
}
